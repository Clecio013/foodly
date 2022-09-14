export type Dish = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type Dishes = {
  dishes: Dish[]
}
