/*! ScrollJs | (c) 2024 Charmingdc | MIT License | https://github.com/charmingdc/scrolljs */
class c {
  constructor(s = !1, o = {
    root: null,
    threshold: 0.8,
    rootMargin: "-10px"
  }) {
    this.options = o, this.animateOnce = s, this.observers = [];
  }
  // create the observe method 
  observe(s, o, r) {
    (!s || typeof s[Symbol.iterator] != "function") && (s = [s]);
    const i = new IntersectionObserver((t) => {
      t.forEach((e) => {
        e.isIntersecting && (r ? e.target.classList.add(r) : console.error("Error: animation class name is not defined"), o && o(e.target)), !this.animateOnce && !e.isIntersecting && (r ? e.target.classList.remove(r) : console.error("Error: animation class name is not defined"), o && o(e.target));
      });
    }, this.options);
    s.forEach((t) => {
      i.observe(t);
    }), this.observers.push({ observer: i, elements: s });
  }
  unobserve(s) {
    let o = !1;
    this.observers.forEach(({ observer: r, elements: i }) => {
      Array.from(i).includes(s) && (r.unobserve(s), s.id ? console.log(`Element with id of "${s.id}" unobserved successfully`) : console.log(`Element with clas name of "${s.classList}" unobserved successfully`), o = !0);
    }), o || console.log("Element not found in any observer:", s.id);
  }
  disconnect() {
    this.observers.forEach(({ observer: s }) => s.disconnect()), this.observers = [];
  }
}
export {
  c as default
};
