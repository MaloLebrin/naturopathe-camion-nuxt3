import { defineStore } from 'pinia'
import type { ModalNameEnum, User } from '~~/types'
import { defaultUserState } from '~~/types'

export const useUserStore = defineStore('user', {
  state: () => ({
    ...defaultUserState(),
  }),
  getters: {
    getCurrent: state => state.currentUser,
    getCurrentUserToken: state => state?.currentUser?.token,
    isLoggedIn: state => state.currentUser !== null,
    isLoading: state => state.ui.loading > 0,
    getIsSidebarOpen: state => state.ui.isSidebarOpen,
    getModalName: state => state.ui.modalName,
    getModalData: state => state.ui.data,
    isModalActive: state => state.ui.modalName !== null,
  },
  actions: {
    setCurrent(user: User) {
      this.currentUser = user
    },
    removeCurrent() {
      this.currentUser = null
    },
    IncLoading() {
      this.ui.loading++
    },
    DecLoading() {
      this.ui.loading--
    },
    closeDrawer() {
      this.ui.isSidebarOpen = false
    },
    openDrawer() {
      this.ui.isSidebarOpen = true
    },
    setModalState(name: ModalNameEnum, data: any) {
      this.ui.modalName = name
      this.ui.data = data
    },
    resetModalState() {
      this.ui.modalName = null
      this.ui.data = null
    },
  },
})
