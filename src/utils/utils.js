export default {
  /**
   * 時刻获得
   * @param msec 毫秒数
   * @returns 格式化好的时间
   */
  getTime: function (msec) {
    const time = new Date(msec)
    const year = time.getFullYear()
    const week = time.getDay()

    let month = time.getMonth() + 1
    let day = time.getDate()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    month = month < 10 ? '0' + month : month
    day = day < 10 ? '0' + day : day
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    const dateMsg = `${year}/${month}/${day}`
    const hourMsg = `${hours}:${minutes}:${seconds}`
    return { dateMsg, hourMsg, week }
  },
  /**
   * 日付をフォーマット
   * @param {Date} date 日付
   * @param {String} format フォーマット
   */
  formatDate: function (date, format) {
    if (!date) {
      date = new Date()
    }

    if (!format) {
      format = 'YYYY-MM-DD hh:ff:ss'
    }

    // eslint-disable-next-line valid-typeof
    if (typeof date !== Date) {
      date = new Date(date)
    }

    let result = format.replace(/YYYY/gi, date.getFullYear())
    result = result.replace(/MM/gi, ('0' + (date.getMonth() + 1)).slice(-2))
    result = result.replace(/DD/gi, ('0' + date.getDate()).slice(-2))
    result = result.replace(/hh/gi, ('0' + date.getHours()).slice(-2))
    result = result.replace(/ff/gi, ('0' + date.getMinutes()).slice(-2))
    result = result.replace(/ss/gi, ('0' + date.getSeconds()).slice(-2))

    result = result.replace(/M/gi, date.getMonth() + 1)
    result = result.replace(/D/gi, date.getDate())
    result = result.replace(/h/gi, date.getHours())
    result = result.replace(/m/gi, date.getMinutes())
    result = result.replace(/s/gi, date.getSeconds())

    return result
  },
  /**
   * timeToMinute
   * @param time 当前的选项的value
   * @returns Number 要发送的分钟数
   */
  timeToMinute: function (time) {
    if (time.indexOf(':') > -1) {
      return +time.split(':')[0] * 60 + +time.split(':')[1]
    }
    return time.replace(/(^[0-9]{1,2})([0-9]{2}$)/g, (match, $1, $2) => +$1 * 60 + +$2)
  },
  /**
   * 时间check和自动转换
   * 715 -> 7:15, 1005 -> 10:05 自动加冒号
   * 360 -> 4:00, 1487 -> 15:27  分钟正确进位小时
   * 使用方法: 在你的on-blur / on-change 的时候传入更新用value的对应对象引用, 键名, $el
   *          你可以保存该返回值, 在对应文件中点击更新按钮时再次弹出提醒
   * @param obj 对象引用
   * @param name 属性键名
   * @param el element
   * @returns 是否通过了时间check, false为未通过
   */
  // checkTime(object, name, el) {
  //   if (!object[name]) {
  //     return true
  //   }
  //   const regExp1 = /^[0-9]{1,2}:[0-9]{2}$/g
  //   const regExp2 = /^[0-9]{3,4}$/g
  //   if (regExp1.test(object[name]) || regExp2.test(object[name])) {
  //     // 兼容三位和四位的输入
  //     const minutes = this.timeToMinute(object[name])
  //     // 统一格式化为变成HH:MM
  //     const handleTime = Vue.filter('handleTime')

  //     const result = handleTime(+minutes)
  //     object[name] = result
  //     if (/^[0-9]{1,2}:[0-9]{2}$/g.test(result)) return true
  //   }
  //   // el.focus() 取消focus
  //   Vue.prototype.$Notice.error({
  //     title: '注意',
  //     desc: '時刻をHH:MM形式で入力してください',
  //     duration: 6.5
  //   })
  //   return false
  // },
  /**
   * 通用转化所属选择器data
   * @param treeData 标准树形数据
   * @param fristDisable 是否禁用第一项
   *
   */
  convertTreeData(treeData, fristDisable, msg) {
    if (!treeData) {
      return []
    }
    return treeData.map((e, i) => {
      const children = e.child || e.children
      if (children) {
        return {
          ...e.data,
          title: e.data.label,
          // 前两层级默认展开方便查看
          expand: e.data.level < 2 || !e.data.level,
          // 是否禁用第一项
          disabled: i === 0 && fristDisable,
          children: this.convertTreeData(children)
        }
      } else {
        return {
          ...e.data,
          disabled: i === 0 && fristDisable,
          title: e.data.label
        }
      }
    })
  },
  /**
   * プラス・マイナス月份
   * @param {date} date
   * @returns {Function}
   */
  addMonths: function (date, months) {
    // eslint-disable-next-line valid-typeof
    if (typeof date !== Date) {
      date = new Date(date)
    }
    const d = date.getDate()
    date.setMonth(date.getMonth() + +months)
    if (date.getDate() !== d) {
      date.setDate(0)
    }
    return new Date(date)
  },
  minusMonths: function (date, months) {
    // eslint-disable-next-line valid-typeof
    if (typeof date !== Date) {
      date = new Date(date)
    }
    const d = date.getMonth()
    date.setMonth(date.getMonth() - months)
    if (date.getMonth() === d) {
      date.setDate(0)
    }
    return new Date(date)
  },
  /**
   * 下载文件
   * @param data repsonse
   * @param filename filename
   * @param type Blob type
   */
  downloadFile: function (data, filename, type) {
    let file = {}
    if (type.indexOf('pdf') > -1) {
      file = new Blob([data], { type: type })
    } else {
      file = new Blob([`\ufeff${data}`], { type: type })
    }
    if (window.navigator.msSaveOrOpenBlob) {
      // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename)
    } else {
      // Others
      const a = document.createElement('a')
      const url = URL.createObjectURL(file)
      a.href = url
      a.download = filename
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
      setTimeout(function () {
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      }, 0)
    }
  },
  /**
   * 检测时间段是否重叠,为true重叠
   * 用于日期时，务必转成yyyymm 或 yyyymmdd 的格式
   * @param StartA 8:00
   * @param EndA   12:00
   * @param StartB 9:00
   * @param EndB   10:00
   * @returns {boolean}
   */
  timeOverlap: function (StartA, EndA, StartB, EndB) {
    if (StartA.indexOf(':') > -1) {
      return (
        Math.max(this.timeToMinute(StartA), this.timeToMinute(StartB)) <
        Math.min(this.timeToMinute(EndA), this.timeToMinute(EndB))
      )
    }
    return Math.max(+StartA, +StartB) < Math.min(+EndA, +EndB)
  },
  /**
   * 获取一个自增的数字数组，如输入1，4 获得[1,2,3,4]
   * @param {start, end} date
   * @returns {Array}
   */
  getNumArray: function (start, end) {
    return Array(end - start + 1)
      .fill(0)
      .map((v, i) => i + start)
  },
  /**
   * 获取指定URL参数
   * @param {sUrl, sKey} string
   * @returns {value}
   */
  getUrlParam(sUrl, sKey) {
    const Oparam = {}
    sUrl.replace(/[?&]?(\w+)=(\/?\w+)+/g, function ($0, $1, $2) {
      Oparam[$1] === undefined ? (Oparam[$1] = $0.split(`${$1}=`)[1]) : (Oparam[$1] = [].concat(Oparam[$1], $2))
    })
    if (!sKey) return Oparam
    else return Oparam[sKey] || ''
  },
  /**
   * 从日期段找出所有日期
   * @param  startDate 需要格式为yyyy/MM/dd
   * @param  endDate
   * @returns {Array}  如2021/04 ~ 2022/03 => [[2021, 4],[2021, 5],[2021, 6].....[2022, 3]]
   */
  getAllMonthFromDateRange(startDate, endDate) {
    const start = startDate.split('/')
    const end = endDate.split('/')
    const startYear = +start[0]
    const endYear = +end[0]
    const dates = []
    for (let i = startYear; i <= endYear; i++) {
      // eslint-disable-next-line eqeqeq
      const endMonth = i != endYear ? 11 : end[1] - 1
      const startMon = i === startYear ? start[1] - 1 : 0
      for (let j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
        const month = j + 1
        dates.push([i, month])
      }
    }
    return dates
  },
  /**
   * 获得给定的文字的getBoundingClientRect信息
   * @param  text 文字
   * @param  opts css
   * @returns getBoundingClientRect对象
   */
  getStringWidth(text, opts = {}) {
    const element = document.createElement('div')
    const textNode = document.createTextNode(text)
    element.appendChild(textNode)
    element.style.fontFamily = opts.font || 'Yu Gothic Medium'
    element.style.fontSize = opts.fontSize || '14px'
    element.style.fontWeight = opts.fontWeight || 'normal'
    element.style.lineHeight = opts.lineHeight || 'normal'
    element.style.position = 'absolute'
    element.style.whiteSpace = 'pre-line'
    element.style.visibility = 'hidden'
    element.style.left = '-999px'
    element.style.top = '-999px'
    element.style.width = opts.width || 'auto'
    element.style.height = 'auto'
    element.style.wordBreak = opts.wordBreak || 'normal'
    document.body.appendChild(element)
    const size = element.getBoundingClientRect()
    element.parentNode.removeChild(element)
    return size
  }
}
