import userFixture from '../../../tests/unit/fixtures/user'

export default {
  SEARCH_USER: jest.fn().mockResolvedValue(userFixture)
}