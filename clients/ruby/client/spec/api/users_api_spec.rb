=begin
#Cordial

#A cooperative word puzzle game!

The version of the OpenAPI document: 0.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.2.1

=end

require 'spec_helper'
require 'json'

# Unit tests for Cordial::UsersApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'UsersApi' do
  before do
    # run before each test
    @api_instance = Cordial::UsersApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of UsersApi' do
    it 'should create an instance of UsersApi' do
      expect(@api_instance).to be_instance_of(Cordial::UsersApi)
    end
  end

  # unit tests for create_user
  # Create a new user.
  # @param [Hash] opts the optional parameters
  # @option opts [CreateUserProps] :create_user_props 
  # @return [User]
  describe 'create_user test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_my_account
  # Returns the current user.
  # @param [Hash] opts the optional parameters
  # @return [Account]
  describe 'get_my_account test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_user
  # Returns the specified user.
  # @param id 
  # @param [Hash] opts the optional parameters
  # @return [User]
  describe 'get_user test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
