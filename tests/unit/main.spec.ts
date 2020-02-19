import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
//import StrimList from "@/components/StrimList.vue";
import StrimList from "../../src/components/StrimList.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("StrimList.vue", () => {
  it("gets strims", () => {
    const wrapper = shallowMount(StrimList);
    const defaultData = StrimList.getStrims();
    expect(defaultData).toEqual(3);
  })
})
