class Equipment < ApplicationRecord
  belongs_to :user
  validate :start_must_be_before_end_time

  private

  def start_must_be_before_end_time
    return if start_time.blank? || end_time.blank?

    if start_time >= end_time
      errors.add(:start_time, "must be before the end time")
    end
  end
end
