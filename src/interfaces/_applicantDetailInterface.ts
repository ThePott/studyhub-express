import type { ApplicantStatus } from './_applicantInterface.js'

export interface ApplicantDetail {
  id: number
  uuid: string
  applicant: {
    nickname: string
    profile_img_url: string
    gender: string
  }
  self_introduction: string
  motivation: string
  objective: string
  available_time: string
  has_study_experience: boolean
  study_experience: string
  status: ApplicantStatus
  applied_at: string
}
