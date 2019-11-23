class RegistrationsController < ApplicationController
  def create
    user = User.new(params.permit(:firstname, :lastname, :email, :password_digest))
    user.save

    if user
      session[:user_id]=user.id
      render json: {
        status: :created,
        user: user

      }
    else
      render json: { status: 500 }
    end
  end
end
