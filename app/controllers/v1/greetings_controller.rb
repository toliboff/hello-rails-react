class V1::GreetingsController<ApplicationController
  def index
    render json:{:greetings=>[
      {
        :id => 'text id',
        :text => 'some-thing'
      }
    ]}.to_json    
  end
end