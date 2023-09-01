import { Box, Grid, Stack, Typography } from "@mui/material";
import Routing from "../ProductPage/Routing/Routing";

function AccountList() {
  return (
    <>
      <Stack sx={{ mb: 10 }}>
        <Routing />
        <Typography variant="h6" sx={{ marginTop: "50px" }}>
          Manage My Account
        </Typography>
        <Box padding="20px">
          <Typography color="red" marginBottom="5px">
            My Profile
          </Typography>
          <Typography color="gray" marginBottom="5px">
            Address Book
          </Typography>
          <Typography color="gray">My Payment Options</Typography>
        </Box>

        <Typography variant="h6" sx={{ marginTop: "5px" }}>
          My Orders
        </Typography>
        <Box padding="20px" lineHeight="1.2vh">
          <Typography color="gray" marginBottom="5px">
            My Returns
          </Typography>
          <Typography color="gray" marginBottom="5px">
            My Cancellations
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ marginTop: "5px" }}>
          My WishList
        </Typography>
      </Stack>
    </>
  );
}
export default AccountList;
