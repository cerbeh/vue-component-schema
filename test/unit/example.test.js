// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils'

// Component with slot
const SlotComponent = {
  template: `
    <div id="input-container">
      <slot></slot>
    </div>`,
  props: ['words'],
}

// The component to test
const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

describe('displays message', () => {
  it('should display message', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = mount(MessageComponent, {
      propsData: {
        msg: 'Hello world'
      }
    })
  
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Hello world')
  })
  it('Should display slot', () => {
    const wrapper = mount(SlotComponent, {
      slots: {
        default: MessageComponent,
      }
    })

    const list = wrapper.find("ul.list-messages");
    expect(list.findAll(MessageComponent).isVueInstance()).toBe(true);
  })
})
