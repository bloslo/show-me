# before running install
# gem install socket.io-client-simple
require 'rubygems'
require 'socket.io-client-simple'

socket = SocketIO::Client::Simple.connect 'http://40.68.124.79:1903'

socket.on :connect do
  puts "connect!!!"
end

socket.on :disconnect do
  puts "disconnected!!"
end

r = Random.new
loop do
  sleep(1)
  socket.emit :phonemeta, {:location => { :long => 2, :lat => r.rand(-20...20)}}
end