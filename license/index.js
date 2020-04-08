/*
* @adonisjs/mrm-preset
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

const createLicense = require('mrm-task-license')
const mergeConfig = require('../utils/mergeConfig')
const gitUserName = require('git-user-name')
const gitUserEmail = require('git-user-email')

function task (config) {
  mergeConfig(config, {
    licenseFile: 'LICENSE.md',
    name: gitUserName(),
    license: 'Unlicensed',
    email: gitUserEmail() || 'virk',
  })
  createLicense({
    defaults: function () {
      return this
    },
    require: function () {
      return this
    },
    values() {
      return config
    }
  })
}

task.description = 'Adds LICENSE.md file'
module.exports = task
