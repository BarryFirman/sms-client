class PhoneNumberController < ApplicationController
  require 'net/http'

  URL_ROOT = 'http://localhost:8082'.freeze
  def new
  end

  def create
    uri = URI("#{URL_ROOT}/phone_number/create")
    Net::HTTP.post_form(uri, 'phone_number[phone_number]' => params[:phone_number][:phone_number])
    redirect_to root_path

  end
end
