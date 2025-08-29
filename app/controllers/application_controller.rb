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
  private

    # ユーザーのログインを確認する
    def logged_in_user
      unless logged_in?
        store_location
        flash[:danger] = "Please log in."
        redirect_to login_url, status: :see_other
      end
    end
end
