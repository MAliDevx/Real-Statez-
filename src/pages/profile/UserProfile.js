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
.profile-header{
      display: flex;
    align-items: start;
    justify-content: space-between;
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
     margin-bottom: 0.4em;
    font-weight: 600;
    color: #333;
    font-size: 1rem;
      }

      input {

            width: 100%;
    box-sizing: border-box;
    padding: 1em;
    padding-right: 3em;
    border: 1px solid #ccc;
    font-size: 0.95rem;
    outline: none;
    transition: 0.3s ease;
    border-radius: 4px;

      }
    }

    .form-row {
      display: flex;
      gap: 16px;

      .form-group {
        flex: 1;
      }
    }

    .button {
   display: flex;
   align-items: center;
   justify-content: end;
   gap: 20px;
   
    }
}
p{
    margin: 0;
}
`;