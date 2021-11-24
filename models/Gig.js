const { format } = require('morgan')
const Sequelize = require('sequelize')
const db = require('../config/database')

// WITH moment
const moment = require('moment')

const Gig = db.define('gig', {
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE,
    get() {
      // 1. WITHOUT moment
      // const date = new Date(`${this.dataValues.createdAt}`)
      // return `${date.toISOString().split('T')[0]} ${date.toLocaleTimeString(
      //   [],
      //   { month: '2-digit', timeStyle: 'medium', hour12: false }
      // )}`

      // 2. WITHOUT moment (another solution)
      // const parts = date.toISOString().split('T');
      // return `${parts[0]} ${parts[1].substring(0, 8)}`;

      // 3. WITH moment
      return moment(this.dataValues.createdAt).format('D MM YYYY HH:mm:ss') // 'D MMM YYYY, LT'
    }
  }
})

module.exports = Gig
