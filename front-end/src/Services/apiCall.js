import axios from 'axios';

export const getInvoices = async () => {
    try {
      const response = await axios.request({
        baseURL: "https://localhost:44313",
        url: "/api/invoice"
      });
      //console.log(response.data[0])
      return response.data;
    }
    catch (error) {
      console.log("Error");
    }
    console.log("test")
  }

  export const getClient = async (dcLink) => {
    try {
      const response = await axios.request({
        baseURL: "https://localhost:44313",
        url: `api/client/${dcLink}`,
      });
      return response.data;
    }
    catch (error) {
      console.log("Error");
    }

  }

  export const getClients = async () => {
    try {
      const response = await axios.request({
        baseURL: "https://localhost:44313",
        url: `api/client`,
      });
      return response.data;
    }
    catch (error) {
      console.log("Error");
    }

  }

  export const getStkItems = async () => {
    try {
      const response = await axios.request({
        baseURL: "https://localhost:44313",
        url: `api/stkitem`,
      });
      return response.data;
    }
    catch (error) {
      console.log("Error");
    }

  }

  export const saveOrder = async (data) => {
      try {
        const response = await axios.request({
            baseURL: "https://localhost:44313",
            url: "api/saveorder",
            method: "POST",
            data: data
        });

        return response.data;
      }
      catch (error){
          return error;
      }
}

 export const getOrderItems = async () => {
    try {
      const response = await axios.request({
        baseURL: "https://localhost:44313",
        url: `api/orderitem`,
      });
      return response.data;
    }
    catch (error) {
      console.log("Error");
    }

  }

  export const editOrder = async (data) => {
    try {
      const response = await axios.request({
          baseURL: "https://localhost:44313",
          url: "api/saveorder",
          method: "PATCH",
          data: data
      });

      return response.data;
    }
    catch (error){
        return error;
    }
}



