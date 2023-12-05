export type Content = {
  id?: string;
  file?: File;
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  bannerUrl: string;
  youtubeLink?: string;
  topicId?: string;
  public?: boolean;
};

export type ContentQuery = {
  showPrivate?: boolean;
  limit?: number;
  offset?: number;
};
