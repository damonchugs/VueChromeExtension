import { mocks } from '../../../mock/index'

// 获取目录
const route = []

mocks.map(te => {
  const { name, src, tab } = te.response()
  const arr = { name, src, open: false, children: [] }
  tab.map(t => {
    arr.children.push({ name: t.name, src: t.src, open: false })
  })
  route.push(arr)
})

// 获取上次浏览专题 - 默认第一个专题
const subject = localStorage.getItem('dchaoStorage') || route[0].src;
const router = route.find(t => t.src === subject);

router.open = true
router.children[0].open = true

const state = {
  subject,
  path: `${router.name} / ${router.children[0].name}`,
  router: route,
}

const mutations = {
  SETPATH (state, path) {
    state.path = path
  },
  GETROUTER (state) {
    return state.router
  },
  SETSUBJECT (state, src) {
    state.subject = src
  }
}

const actions = {
  setPath ({ commit }, path) {
    commit('SETPATH', path)
  },
  setSubject ({ commit }, src) {
    commit('SETSUBJECT', src)
  },
  getRouter({ state }) {
    return new Promise((resolve, reject) => {
      if (state.router.length === 0) {
        reject(state.router)
      } else {
        resolve(state.router)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}