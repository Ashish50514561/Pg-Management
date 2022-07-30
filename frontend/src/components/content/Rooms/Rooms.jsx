import React from "react";
import { Stack, Grid, ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";

export default function Rooms() {
  const images = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg?crop=0.652xw:1.00xh;0.213xw,0&resize=640:*",
    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/148099656.jpg?k=deea0b8cb989133477e9cd6f32312667e4ceb7d8ba6e2bf27cf559b041c1cf15&o=",
    ,
    "https://scdn.aro.ie/Sites/50/anandaspa/uploads/images/FullLengthImages/Large/Guest_Room_2.jpg",
    ,
    "https://shangrila.com.ba/en/media/k2/items/cache/e529a8dc22bd84a37f6f8ae6b8ce40d3_L.jpg",
    ,
    "https://media.cntraveler.com/photos/5cae2382619561e5f84307b0/16:9/w_2560%2Cc_limit/The-Hoxton-Paris_2019Bedroom-(1).jpg",
    ,
    "https://dev-nishat-hotels.s3.us-east-2.amazonaws.com/feature-images/165224852414.jpg",
    "https://m.lemontreehotels.com/getattachment/a991b8ea-7ff7-45c4-9c3a-4c0476cef534/Business-Rooms.aspx",
    "https://www.theparkhotels.com/images/site-specific/new-delhi/rooms/luxury_premium_02.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kips-bay-dallas-2021-bedroom-martyn-lawrence-bullard-1632328947.jpg?crop=0.716xw:1.00xh;0.143xw,0&resize=640:*",
    "https://www.thespruce.com/thmb/N1dreuJow69xabeEVK-pS0hROdw=/950x670/filters:fill(auto,1)/ScreenShot2021-09-17at7.51.37PM-4819a7b1dc1b4258a845b3c212730dd7.png",
    "https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000",
    ,
    "https://dev-nishat-hotels.s3.us-east-2.amazonaws.com/feature-images/162387412964.jpg",
    ,
    "https://www.ikea.com/images/a-gladstad-bed-in-a-grey-bedroom-covered-with-lappnycklar-fl-3f6f45fbfe31064706a0c539cd0af1ce.jpg",
  ];

  return (
    <Grid p={2} container item>
      <Stack>
        <Box sx={{ width: "100%", height: "100%", overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {images.map((image) => (
              <ImageListItem>
                <img src={`${image}`} loading="lazy" alt="..." />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </Grid>
  );
}
