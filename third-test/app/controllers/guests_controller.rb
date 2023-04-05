class GuestsController < ApplicationController
    def index
        guests = Guest.all
        render json: 'ian waz here'
    end




  end
  