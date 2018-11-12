class ApplicationController < ActionController::API
  before_action :authorized

  def encode_token(payload)
    JWT.encode(payload, 'my_s3cr3t')
  end

  def decoded_token
    token = request.headers['Authorization']
    JWT.decode(token, 'my_s3cr3t')[0]

  end

  # def decoded_token
  #
  #       JWT.decode(token, 'my_s3cr3t')
  #   end

  def current_user
    if decoded_token
      user_id = decoded_token['user']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized
   render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
 end
end
