import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useToggleStore = defineStore('toggle', () => {
  const menu = reactive({})

  function toggleMenu(property) {
    if (!Object.keys(menu).includes(property)) menu[property] = false

    Object.keys(menu).forEach((key) => {
      menu[key] = key === property ? !menu[key] : false
    })
  }

  return { menu, toggleMenu }
})
