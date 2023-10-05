export interface IProduct {
  id: number,
  name: string,
  image_url: string,
  count: number,
  width: number,
  height: number,
  weight: number
}

export interface IComment {
  id: number,
  description: string,
  created_at: Date
}

export interface IProductWithDetails extends IProduct {
  comments: IComment[]
}

export interface CreateProductDto {
  name: string,
  image_url: string,
  count: number,
  width: number,
  height: number,
  weight: number
}

export interface CreateCommentDto {
  productId: string,
  description: string,
}