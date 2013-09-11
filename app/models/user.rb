class User < ActiveRecord::Base
  has_many :tweets

  def tweet(status,time_interval)
    p time_interval
    tweet = Tweet.create!(:status => status, :user_id => self.id)
    TweetWorker.perform_in(time_interval.to_i.minutes,tweet.id)
  end
  
end
