class ApplicationController < ActionController::Base
  include SessionsHelper
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  def hello
    render html: "hello!"
  end

  def goodbye
    render html: "goodbye!!"
  end

  def about
  end

  def contact
  end
  # allow_browser versions: :modern
end
