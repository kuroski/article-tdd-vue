jest.mock('@/store/actions')
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import UserView from '@/views/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
import initialState from '@/store/state'
import actions from '@/store/actions'
import userFixture from './fixtures/user'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('UserView', () => {
  let state

  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({
        state,
        actions,
      })
    })

    return {
      wrapper,
      userSearchForm: () => wrapper.find(VUserSearchForm),
      userProfile: () => wrapper.find(VUserProfile)
    }
  }

  beforeEach(() => {
    jest.resetAllMocks()
    state = { ...initialState }
  })

  it('renders the component', () => {
    // arrange
    const { wrapper } = build()
    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    // arrange
    const { userSearchForm, userProfile } = build()

    // assert
    expect(userSearchForm().exists()).toBe(true)
    expect(userProfile().exists()).toBe(true)
  })

  it('passes a binded user prop to user profile component', () => {
    // arrange
    state.user = userFixture
    const { userProfile } = build()

    // assert
    expect(userProfile().vm.user).toBe(state.user)
  })

  it('searches for a user when received "submitted"', () => {
    // arrange
    const expectedUser = 'kuroski'
    const { userSearchForm } = build()

    // act
    userSearchForm().vm.$emit('submitted', expectedUser)

    // assert
    expect(actions.SEARCH_USER).toHaveBeenCalled()
    expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({ username: expectedUser })
  })

})