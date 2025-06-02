import styled from 'styled-components';

export const StyledProfileWrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;

  /* .top-banner {
    width: 100%;
    height: 200px;
    background-image: url('https://images.unsplash.com/photo-1509395176047-4a66953fd231');
    background-size: cover;
    background-position: center;
    border-radius: 10px;
  } */

  .profile-image-container {
    position: relative;
    margin-top: -50px;
    display: flex;
    justify-content: start;
    gap: 20px;

    .profile-image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 4px solid white;
      object-fit: cover;
      border: 1px solid grey;
    }
.userDetails{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3px;
    .userName{
    font-weight: 600;
    font-size: 19px;
    }
}
    label.upload-icon {
      position: absolute;
      bottom: 0;
      left: 68px;
      background: #007bff;
      color: white;
      border-radius: 50%;
      padding: 6px;
      cursor: pointer;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input[type="file"] {
      display: none;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 30px;

    .form-group {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 6px;
        font-weight: 500;
      }

      input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: 14px;
        outline: none;

      }
    }

    .form-row {
      display: flex;
      gap: 16px;

      .form-group {
        flex: 1;
      }
    }

    .submit-button {
      margin-top: 20px;
      padding: 10px 20px;
      border: none;
      background-color: #007bff;
      color: white;
      font-size: 16px;
      border-radius: 6px;
      cursor: pointer;
      align-self: center;

      &:hover {
        background-color: #0056b3;
      }
    }
}
p{
    margin: 0;
}
`;