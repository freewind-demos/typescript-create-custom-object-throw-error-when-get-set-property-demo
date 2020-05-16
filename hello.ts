const user = {
  name: 'freewind'
}

const proxy = new Proxy(user, {
  get(target, prop) {
    throw new Error(`custom error when get ${String(prop)}`)
  },
  set(target, prop, value: any): boolean {
    throw new Error(`custom error when set ${String(prop)}=${value}`)
  }
})

console.log(proxy.name);
console.log(proxy.name = '111');
