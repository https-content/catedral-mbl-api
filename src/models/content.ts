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
