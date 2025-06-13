import './home.css';
import './navbar/navbar.css'
import styled from '@emotion/styled';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Button, Drawer, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

import { logout } from '../actions/userAction';
import LeftDrawer from './navbar/leftDrawer';
import { FURL } from '../constants/userConstants';

const LeftSide = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: auto;
    justify-content: flex-start;
  }
`;

const RightSide = styled.div`
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: auto;
    justify-content: flex-end;
  }
`;

const Account = styled.h3`
  font-size: 12px;
  border-radius: 50%;
  background-color: #ffffff;
  color: var(--red);
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  font-weight: 700;
  @media only screen and (min-width: 600px) {
    font-size: 34px;
    font-weight: 800;
  }
`;
const EmojiIcon = styled(EmojiEventsOutlinedIcon)`
              margin-right: 10px;
              font-size: 20px;
              stroke: white;
              stroke-width: 1.5;
  @media only screen and (min-width: 600px) {
    font-size: 34px;
    font-weight: 800;
  }
`

const WithdrawContainer = styled(Grid)``;

const AddButton = styled(Button)`
  background-color: var(--red);
  color: #ffffff;
  width: 160px;
  margin: 0 auto;
  &:hover {
    background-color: var(--green);
    color: #ffffff;
  }
`;

const Deatil = styled.div`
  border-top: 1px solid #dddddd;
  margin-top: 10px;
  text-align: left;
  padding: 10px 5px;
  p {
    color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
  }
`;

const DeatilTop = styled.div`
  margin-top: 10px;
  text-align: center;
  padding: 10px 0;
  p {
    color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
  }
`;

const IconContainer = styled.div`
background-color: #ffffff;
padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px !important;
  border-radius: 50%;
  color:black;
  @media (max-width: 600px) {
    margin-right: 10px;
  }`

const NotificationDrawerContent = styled.div`
  width: 60vw;
  max-width: 480px;
  min-width: 320px;
  padding: 24px 16px;
  background: #fafbfc;
  min-height: 100vh;
  position: relative;
  @media (max-width: 600px) {
    width: 60vw;
    max-width: 60vw;
    min-width: 0;
  }
`;

const NotificationTitle = styled(Typography)`
  font-size: 1.2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 16px;
`;

const NotificationEmpty = styled.div`
  color: #888;
  text-align: center;
  margin-top: 40px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: -95px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 2;
  color: #222;
  &:hover {
    color: #e53935;
  }
`;

export function Navbar({ home }) {
  const { user } = useSelector((state) => state.user);
  const { config } = useSelector((state) => state.config);
  console.log(config, 'configs')
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const dispatch = useDispatch;
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(true);
  };
  const handleLeftClick = () => {
    setLeftOpen(true);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  // Example notifications (replace with your real data)
  const notifications = [
    // { id: 1, text: "Welcome to Gamizo11!" },
    // { id: 2, text: "You have a new match result." },
  ];

  return (
    <>
      <LeftDrawer
        leftOpen={leftOpen}
        setLeftOpen={setLeftOpen}
        open={open}
        setOpen={setOpen}
      />
      <div className="navtopbar">
        <LeftSide>
          <Account
            onClick={() => handleLeftClick()}
            style={{ cursor: 'pointer' }}
            className="name"
          >
            {user?.username && user?.username.charAt(0)}
          </Account>
          <img src={`${FURL}/gamizologo.png`} alt='logo' className="logo" style={{ height: "20px" }} />
        </LeftSide>
        <Center>

        </Center>
        <RightSide>
          <IconContainer>
            <NotificationsNoneIcon
              style={{
                marginRight: '0px',
                cursor: 'pointer',
                fontSize: '20px',
                strokeWidth: '1.5',
              }}
              onClick={() => setNotifOpen(true)}
            />
          </IconContainer>
          <IconContainer>
            <AccountBalanceWalletOutlinedIcon
              onClick={() => handleClick()}
              style={{
                cursor: 'pointer',
                fontSize: '20px',
                strokeWidth: '1.5',
              }}
            />
          </IconContainer>
        </RightSide>
      </div>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <DeatilTop>
          <p>total balance</p>
          <h5>
            ₹
            {user && user.wallet}
          </h5>
        </DeatilTop>
        <AddButton
          onClick={() => navigate('/payment', {
            state: {
              tab: 'deposit',
            },
          })}
        >
          add cash
        </AddButton>
        <Deatil>
          <p>Amount added</p>
          <h5>
            ₹
            {user?.totalAmountAdded}
          </h5>
        </Deatil>
        <Deatil>
          <WithdrawContainer container>
            <Grid item sm={7} xs={7}>
              <p>winnings</p>
              <h5>
                ₹
                {user?.totalAmountWon}
              </h5>
            </Grid>
            <Grid item sm={5} xx={5}>
              <Button
                onClick={() => navigate('/transaction', {
                  state: {
                    tab: 'withdrawal',
                  },
                })}
              >
                Withdraw
              </Button>
            </Grid>
          </WithdrawContainer>
        </Deatil>
        <Deatil>
          <p>cash bonus</p>
          <h5>₹ 0</h5>
        </Deatil>
      </Drawer>
      <Drawer
        anchor="right"
        open={notifOpen}
        onClose={() => setNotifOpen(false)}
      >
        <NotificationDrawerContent>
          <CloseButton onClick={() => setNotifOpen(false)} aria-label="Close notifications">
            <CloseIcon />
          </CloseButton>
          <NotificationTitle>Notifications</NotificationTitle>
          {notifications.length === 0 ? (
            <NotificationEmpty>No notifications yet.</NotificationEmpty>
          ) : (
            <List>
              {notifications.map((notif) => (
                <ListItem key={notif.id} divider>
                  <ListItemText primary={notif.text} />
                </ListItem>
              ))}
            </List>
          )}
        </NotificationDrawerContent>
      </Drawer>
      {/*home && (
        {/*<div className="hometop">
          <div
            onClick={() => navigate('/')}
            className={
              location.pathname == '/'
                ? 'hometopicon selectgame'
                : 'hometopicon'
            }
          >
            <SportsCricketIcon
              style={{ fontSize: '20px', fontWeight: '400' }}
              className={location.pathname == '/' ? 'selectedIcon' : ''}
            />
            <h5>Cricket</h5>
          </div>
          <div
            onClick={() => navigate('/football')}
            className={
              location.pathname == '/football'
                ? 'hometopicon selectgame'
                : 'hometopicon'
            }
            style={{ fontSize: '12px', fontWeight: '400' }}
          >
            <SportsSoccerIcon style={{ fontSize: '20px', fontWeight: '400' }} />
            <h5>Football</h5>
          </div>
          <div
            className="hometopicon"
            style={{ fontSize: '12px', fontWeight: '400' }}
          >
            <SportsBasketballIcon
              style={{ fontSize: '20px', fontWeight: '400' }}
            />
            <h5>Basketball</h5>
          </div>
          <div
            className="hometopicon"
            style={{ fontSize: '12px', fontWeight: '400' }}
          >
            <SportsHockeyIcon style={{ fontSize: '20px', fontWeight: '400' }} />
            <h5>Hockey</h5>
          </div>
        </div>}
      )*/}
    </>
  );
}

export default Navbar;
