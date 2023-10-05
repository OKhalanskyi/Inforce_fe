import { FC, useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import Form from '@/components/Form/Form.tsx';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


const Toolbar: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>

      <Button
        variant="contained"
        color="warning"
        onClick={() => setIsModalOpen(true)}
      >Create Product</Button>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Box sx={style}>
          <Form onSubmit={() => {
            setIsModalOpen(false)
            location.reload();
          }}/>
        </Box>
      </Modal>
    </div>
  );
};

export default Toolbar;
