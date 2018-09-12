import userFixture from '../../tests/unit/fixtures/user'

export default {
  searchUser: jest.fn().mockResolvedValue(userFixture)
}