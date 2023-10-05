import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import styles from './form.module.css';
import { usePostProductMutation } from '@/api/product.api.ts';

type Props = {
  onSubmit: () => void
}

const Form: FC<Props> = ({ onSubmit }) => {
  const [postProduct] = usePostProductMutation();

  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [count, setCount] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const nameRegister = register('name', { required: true });
  const imgRegister = register('img', { required: true });
  const countRegister = register('count', { required: true, valueAsNumber: true, validate: (value) => value > 0 });
  const widthRegister = register('width', { required: true, valueAsNumber: true, validate: (value) => value > 0 });
  const heightRegister = register('height', { required: true, valueAsNumber: true, validate: (value) => value > 0 });
  const weightRegister = register('weight', { required: true, valueAsNumber: true, validate: (value) => value > 0 });

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(async (_, event) => {
        event?.preventDefault()
        setLoading(true)

        await postProduct({
          name,
          image_url: img,
          count,
          weight,
          width,
          height
        })
        onSubmit();
        setLoading(false)
      })}
    >
      <TextField
        value={name}
        {...nameRegister}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
        error={errors.name && true}
        id="outlined-required"
        label="name"
      />

      <TextField
        value={img}
        {...imgRegister}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setImg(event.target.value);
        }}
        error={errors.img && true}
        id="outlined-required"
        label="img"
      />

      <TextField
        value={count}
        {...countRegister}
        type="number"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCount(+event.target.value);
        }}
        error={errors.count && true}
        id="outlined-required"
        label="count"
      />

      <TextField
        type="number"
        value={width}
        {...widthRegister}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setWidth(+event.target.value);
        }}
        error={errors.width && true}
        id="outlined-required"
        label="width"
      />

      <TextField
        type="number"
        value={weight}
        {...weightRegister}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setWeight(+event.target.value);
        }}
        error={errors.weight && true}
        id="outlined-required"
        label="name"
      />

      <TextField
        type="number"
        value={height}
        {...heightRegister}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setHeight(+event.target.value);
        }}
        error={errors.height && true}
        id="outlined-required"
        label="height"
      />

      <span>
        <Button
          variant="outlined"
          type="submit"
          disabled={loading}
        >
          SUBMIT
        </Button>
      </span>

    </form>
  );
};

export default Form;