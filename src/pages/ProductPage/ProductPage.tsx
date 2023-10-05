import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery, usePostCommentMutation } from '@/api/product.api.ts';
import { Button, Card, CardActionArea, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import CommentsList from '@/components/CommentsList/CommentsList.tsx';
import { useForm } from 'react-hook-form';

const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const [comment, setComment] = useState('');
  const [postComment, { isLoading: commentLoading }] = usePostCommentMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data, isLoading, isFetching } = useGetProductByIdQuery(productId ? productId : '1');
  const commentRegister = register('comment', { required: true });

  if (isLoading || isFetching || commentLoading) {
    return <h1>Loading</h1>
  }

  return (
    <div>
      <Card sx={{ maxWidth: 1000, minWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data?.image_url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data?.name}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              {`count ${data?.count}`}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              {`width ${data?.width}`}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              {`height ${data?.height}`}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              {`weight ${data?.weight}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <form onSubmit={handleSubmit((_, event) => {
        event?.preventDefault()
        postComment({productId: productId ?? '1', description: comment})

      })}>
        <TextField
          variant="filled"
          value={comment}
          {...commentRegister}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setComment(event.target.value);
          }}
          error={errors.comment && true}
          id="outlined-required"
          label="comment"
        />

        <span>
          <Button
            variant="outlined"
            type="submit"
          >
            SUBMIT
          </Button>
        </span>
      </form>

      <CommentsList comments={data?.comments} />
    </div>
  );
};

export default ProductPage;