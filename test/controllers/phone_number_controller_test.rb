require "test_helper"

class PhoneNumberControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get phone_number_new_url
    assert_response :success
  end

  test "should get create" do
    get phone_number_create_url
    assert_response :success
  end
end
