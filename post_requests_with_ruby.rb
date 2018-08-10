require 'net/http'
require 'json'
uri = URI('https://challenge.code3scape.com/boxes')

res = Net::HTTP.post_form(uri, {})
key = JSON.parse(res.body)["key"]
boxIds = JSON.parse(res.body)["boxIds"]

vals = []

boxIds.each do |id|
  string = 'https://challenge.code3scape.com/boxes/' + id + '/' + key
  res = Net::HTTP.post_form(URI(string), {})
  val = JSON.parse(res.body)['val']
  vals.push(val)
end

largest = vals.sort![-1]
puts largest
puts key

uri = URI('https://challenge.code3scape.com/submit')
res = Net::HTTP.post(uri, {"name" => "andzu schaefer",
"email" => 'andzu@protonmail.com',
"key" => key,
"largestVal" => largest}.to_json, "Content-Type" => "application/json")
puts res
