import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'
import { JSDOM } from 'jsdom'
import test from 'ava'

//Without this the .env won't be loaded
require('dotenv').config()

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and create a server listening on localhost:4000
test.before(async () => {
  const config = {
    dev: true,
    rootDir: resolve(__dirname, '..')
  }
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  await nuxt.server.listen(4000, 'localhost')
}, 30000)

// Example of testing via dom checking
test('Route /topics....', async (t) => {
  const context = {}
  const { html } = await nuxt.server.renderRoute('/topics', context)
  const { window } = new JSDOM(html).window

  //Do we have the correct header
  const heading = window.document.querySelector('.heading')
  t.not(heading, null)
  t.is(heading.textContent, 'Topics')

  //Is the add button there with the correct pathname
  const anchor = window.document.querySelector('.add-topic')
  t.not(anchor, null)
  t.is(anchor.textContent, 'Add Topic')
  t.is(anchor.href, "/topics/add")

  //Are we listing the topics we expect from the mock API.
  const cards = window.document.querySelector('.cards')
  t.not(cards, null)
  t.is(cards.childElementCount, 100)

  //Test the card renders as we expect
  const card = cards.firstChild
  t.is(card.className, 'card')
  
  const cardText = cards.querySelector('.card-text')
  t.not(cardText, null)
  t.regex(cardText.textContent, /(sunt aut facere repellat provident occaecati excepturi optio reprehenderit)/)
})

// Close server and ask nuxt to stop listening to file changes
test.after('Closing server and nuxt.js', (t) => {
  nuxt.close()
})
