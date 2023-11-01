const getClassName = (block, element = '', modifier = '', modifierValue = true) => {
    let className = `${block}${element ? `-${element}` : ''}`

    if (modifier) {
        className +=
            typeof modifierValue === 'boolean' ? `_${modifier}` : `_${modifier}_${modifierValue}`
    }

    return className
}

const bemMixin = {
    name: 'bem',
    methods: {
        bem({ element = '', mod = {} } = {}) {
            let block

            if ('__name' in this.$options) {
                block = this.$options.__name
            } else {
                block = this.$options.__file.split('/').pop().replace('.vue', '')
            }

            const classList = []

            if (element) {
                classList.push(getClassName(block, element))
            }

            Object.keys(mod).forEach((modifier) => {
                if (mod[modifier] !== false) {
                    classList.push(getClassName(block, element, modifier, mod[modifier]))
                }
            })

            return [block, ...classList]
        }
    }
}

export default bemMixin
