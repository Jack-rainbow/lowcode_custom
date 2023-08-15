import { defineComponent } from 'vue'
import styles from './demo.module.scss'

const Button = defineComponent({
  name: 'Lcdemo',
  props: {
    size: { type: String },
    text: { type: String }
  },
  emits: ['onClick', 'onMouseenter', 'onMouseleave'],
  setup(props, { emit, attrs }) {
    return () => {
      return <div class={styles.container}>{props.text}</div>
    }
  }
})

export default Button
