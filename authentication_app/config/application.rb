require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AuthenticationApp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2
    config.generators.system_tests = nil

      config.middleware.insert_before 0, Rack::Cors do
        allow do
          origins '*'
          resource '*', headers: :any, methods: [
            :delete, :put, :patch, :get, :post, :options
          ]
        end
      end
    
  end
end
