import * as React from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useGlobalContext } from "../contextApi/Context";

const DetailForm = () => {
  const theme = useTheme();
  const { id } = useParams(); // Get the ID from the URL
  const [activeStep, setActiveStep] = React.useState(0);
  const { products } = useGlobalContext();
  const [productCard, setProductCard] = React.useState(null); // Initialize as null to indicate no data

  React.useEffect(() => {
    console.log("Products from context:", products); // Debug log for products
    const selectedProduct = products.find((item) => item.id === id); // Use find to get a single product by the ID from the URL
    console.log("Selected Product:", selectedProduct); // Debug log for selectedProduct
    if (selectedProduct) {
      setProductCard(selectedProduct);
    }
  }, [id, products]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (!productCard) {
    return <div>Loading...</div>; // or a more sophisticated loading indicator
  }

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{productCard.dish_name}</Typography>
      </Paper>
      <Box>
        {productCard.images?.map((step, index) => (
          <div key={index}> {/* Ensure each image has a unique key */}
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </Box>
      <MobileStepper
        steps={productCard.images?.length || 0}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === (productCard.images?.length || 0) - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default DetailForm;
