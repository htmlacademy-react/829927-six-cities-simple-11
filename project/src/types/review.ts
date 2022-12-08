export interface IUser {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface IReview {
  id: number;
  date: string;
  rating: number;
  user: IUser;
  comment: string;
}

export interface IReviewBody {
  comment: string;
  rating: number;
}

export interface IReviewParams {
  id: string;
  review: IReviewBody;
}
