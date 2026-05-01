import { 
  Building2, 
  Settings2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Users2, 
  Wrench, 
  ArrowUpCircle,
  Truck,
  Home
} from 'lucide-react';

export const COLORS = {
  primary: '#E11D2E',
  primaryDark: '#B91C1C',
  bgLight: '#F8FAFC',
  navy: '#1E3A5F',
  navyDark: '#0F172A',
};

export const CONTACT_INFO = {
  address: "Shop No. 59, Ground Floor, Mathura Road, Vardhman Star Mall, Sector 19, Faridabad, Haryana – 121002",
  emails: [
    "Airrexxelevatorspvtltd@gmail.com",
    "Info@airexxelevatorspvtltd.com",
    "Director@airexxelevatorspvtltd.com",
    "Sales-service@airexxelevatorspvtltd.com"
  ],
  website: "www.airrexxelevatorspvtltd.com",
  phones: [
    { name: "Jagmohan Singh", number: "+91 9350532047" },
    { name: "Deepak Singh", number: "+91 9304522997" }
  ],
  gstin: "06ABDCA6730C1Z4",
  udyam: "UDYAM-HR-03-0008546",
  cin: "U28112HR2023PTC112345", // Placeholder CIN
  whatsapp: "+919350532047",
  socials: {
    facebook: "https://www.facebook.com/Airexxelevators",
    twitter: "https://x.com/Airexxelevators",
    instagram: "https://www.instagram.com/airexelevators",
    linkedin: "https://www.linkedin.com/in/airexxelevators/",
    pinterest: "https://in.pinterest.com/airexxelevators",
    youtube: "https://www.youtube.com/@Airexxelevators"
  }
};

export const SERVICES = [
  {
    title: "Passenger Elevators",
    description: "Smart and smooth solutions for people movement in upscale residential and commercial buildings.",
    icon: Users2,
    image: "https://images.pexels.com/photos/36733358/pexels-photo-36733358.jpeg"
  },
  {
    title: "Freight Elevators",
    description: "Robust, heavy-duty elevators designed to transport goods with maximum safety and efficiency.",
    icon: Truck,
    image: "data:image/webp;base64,UklGRngeAABXRUJQVlA4IGweAACQkwCdASr9AEkBPp1InEslpCkspPQdSZATiWVt2iO6hzpD7OaEUH4DZaC3lHEEKd+R/z/lqvr+on/FdIzbR9PL6LmsQ/OewPWE4V/hdz72+/tGcZgH7p2a/JrZ4P3D/rewR/K/8P+x/vN/8Pml/df+LwOPRiP7t26UOXAr+gDaEjf0mQQIh5dS63JMXxQjaRKlfrYm3b5b5FDa0aN+8GcmUhb6WfNkyfNi7Gpoopw/UQ+2xoU19vyPNyK89e/9g4hW8swZE+TGn05/OdqZNSDmb9iSUcGyCWFxGMf8OAq4X7CnYSmRs8bH8tNiE2RIf/o857gKCU4rqLR9Rz2Nld7hUXg8/FlzhasrJH5TWQmTREAirQh++uS/OEOEjq/340mEXYe1Cv8EDe612eZm0ggtwUsumgZdl2tt4z+97QRwhNEnSBjigRSiWvoYI8Mo4oK7cuEoNxQR8EBNozxZjdW7e3WMQ0n4vYKWUQIpesTdIBS1/QxYAbNpcJbzPWNVpjknrhJMCgGpCbJ43ZqkVcJxJ/0Nezft5lCsCDEWYN6xV0WJfyaqqm8HGx/rqGhmBV/uCbDdNPDekBVOBgjiYYgMO/oznad4gxWoDUlxEQepBNY1NgAtZTzWDebDGYs35K5wyR0/kMa7HmpTYkESAV8shT2aQNWW3Ores7JquDPj7r9LVAaX200cNMaiucCNoRj9DiumTVWKuX/MfAvvJkJRiC7rabENJa0TQ9CSQbuIwxU8WZmEzs2pRoRIn+N1b9kRdKOYmG9e7PC5ka+NcUilf6rp8ZfzFLH9lz1G/Z0Kol+YnJSyBt6bjnZv7m0Hu14WzTBgZ4474Wwa6gDwYmufFmAspstj9Sj5vFXFk12vvy9vCuJlIq+fMKxVy6YrPoEJ92+ok43qhsK9Up9cN6PNON5iUlQPFnyZKYq4K6n5Bcol98Vdd9gt1Zw4D8UqLeyxvTJM9OhGC6/9sgiqcD5uYvG5MPvAGfA9ZIf2jASsS7uNnrdm8Xrap4yQ2bSvv1jhdMFRNllAX3umfbo4e8FxALGSUo0lCqyN7TkaVqx6aP7iCUe59X+G5A+i0xpP9iLjb1rd2GjijPxRKiLAFtxno+STJDP4N4Obb5haPWPEcCz/eK1VrdLrc6xsRrUesT4LkoCaWdmQD3z3GmkImCvOHlRVxYc9rstWCd/kTmrKbTBNIb8jz8frKQ+ocKEBPCp7R0FMdSjcGAVItfcb/ZJehVKdxYst9kcfbUbP3WLndwKLDda51YOAFxEUto/1vZfvSo6N4o2xI06+fxruhAff4KRM9sOcdZhL/RGILJ4CSxHNl8btQVI4yJLIwECGapjO6dtJ03zS3eeTqxol5ximugzhOgQ7B+UuIVr1s+4hci/13lhIObmwVN0TLLSoT2BpfWx0nrvzbn7zZLCs0Lm0+MFRNnejzgKcQHUZMjzsajf6Q6auw/+HL+EowMTNJczjMV/I3MIHw4g4RvtEHtOD5gst0k34mVBtJCgt7oIIXm/5QtzMq7bKsdq96SgUjXbeYrWVQpW2OxfOwGn+LNLlYUbFcexGz/hy5dR+8cxbqioprr9AAP7w5CidohbRpfbVzq6ZTKTwRr1oqJdSyeFkj6HZa8Y12NOYSYWQ4lwJey6yAuQP3UDgbK43jm9Dc7QZuAGN2fkEhf3huzB+t9/N6Lk49Lh4e1tPln0Bbc4iakHgClr4hDwqnF5XsRI8zinNOs8bZvHJaiRb+HyESHkAbfidQ0DyLbtZTLGD7KYhOQ04LGdldrD4RfkE2+DMVFzNYLIwkGR9QN+hQE+yZp6wrCuo8NElsfUOORAamkoqIParUU54SArx6aK3MICSmXa9gm873gvb3YSCY7NFXRPY2yRfDSEbxEHWwNboSuafOjRHXrI+SyoGdE9yHOa73dM6pGsBxOaOZjpFEhuy7b4qVEtouEfyUZajgbj3fh3H8SXIXzh9GWn/jt89cun84YdAbr6TDy5847702y+t76iS9h+vJtcK/yx+rzLriFgiWdlhZyyGKqlwM85GQEH2xZ4ilJQx8xVzxxcOWZm8OcywzcZASCL+z5OOyjSG6kF/prwEr2KWK1zyWFLPVqerIUKmHYpLlFvmjjXJ6t/fvp1erE6ht4fJzOrbhwQMpVQlqNb5zz7RBBHXF3poC27piqyAMhuZLxMZJc9nSOm7RttSuaPnk+KEuEn0vGyfgiLB6H6fUwk813OyrVy7qT7rst9nR6NxzpePFgpWWP1ReUiM3WlXW7cXXPPiTlS4+KLhcvwjLS0pubx6T3qOYGLbWMtgKS55euBpy7uLwkFXqFd5oNBi5hDMOYSwEiUBoycfVkcWhKM/I0Kf89XprdYOb5Dq/c5+m5WuLKfNRofaJsXpOF1WbnMxbJWiUx3i5CYLiMraQ9by08xbcW1XG7UYPMrGUFo3vdH4uZC+qqNm19wqeqbatXHHXJpH+rQV/F1YTwAXCID6R2DgxjSgSkxWrhLn+FgPeAcbfUxQERwxEBX5TlCM9CkVuxSAe6E9cZo1WKkzS8HNo8tGTeWiRuFKKuN1+PChl6REmVH4pf90eEVynnDmK7nm4r4+27BYEvCSqZhENrtsx2vN1zXO8GdAmLL/QiZ9qXpiDbxJXX/Hko53KGhA7adTduU8MvXzpgx41OFWy4kuQwEdCUNkDmW7eQbGiGRvX+4qiQ+UpdfhWqpywWiVzxp2FIyxvMbOHU0GymFVjTu+BrE35a/+nsEST7GCef4QLp91BTk3lciVbBTmKc/9KBy14AlS4680+YMO257XXg4HF2U1C0d1YpyNzI2/GP5ABEBPSRM7/CQk9vqAJ6+lykKkBe7PrIk2eyZD+K/1ziN8z4vSIymg54jNh+415Y6PcWI9vmNTlMKMbFWfvgB/7lJml7F57tU8su8hLtAcKn/GjnzeHdrfmir8B59xnanJgSmwjcfmEByOd+rFmt6RmYbYO+HYLUK1c56klIMaBSTM4qFQXDano3UfqwVzj3MK/6JXGDQttqokXEYaF3dGTTcKY9ctOzXSQWgD2wvuDpYlVq8k2eGhKHE3nxkBR8E0UqWa42Cj3DLX29OK9TSM/3k2mOQNXiZlKKIdGNrTdnDoWL38w6pYMeI5EQxn+/cN+zXTWfYuNRD/KELtz/y5txKBLgNwWN0/gyd89ggagpcrlO/eXKEOiMnKStkzl4gPNfTJLpG5MC6IY2JVWg+ltPXk0E/eouKpu9HZCLN9I6nD43OhPUflSFm0BfVeEl6Fn2MF963q1FSzV/oXj2Nh+1spI6TkBAwqW0+PJlod8FehYlnsWGWGZwQiiNWDug5iWlYJElAqSeew8N2BI7HF5QCJrRZsGNBSYyFZR4wGJ9G4ijY9FapjkOZB0Flx2Cg18Xl8xymersYAZPNKyl/jjQdKdzF0lfclAx2kJ5qHYNrSDzKxrOS7tgjeuRWRf2FTiW7q/HhFkqCYUznzWpeFtk4pxjtUq1fXTkahEGfKPTcypGuUN3hICvZbZ1oKBOeYlKWYQ5vsGEG+D2cZijZeCaIYjuwNT8ElQisZ7AN5J31MLe+3BZjNm526o4mc7FdlgzmtJidhGT/016opYW6StjBlRKrUcAvnOusFtx9byd3RkbJN9Y4tibn+s6aPAMPf4HJ7exfgdr6o1YQYobziNmgm6V1BaeEj7e9tBxc/grdTWQKv7GdMISj6BGPwGnzLP+zdXPJewh4Iy5fkJMTwADfHOY4rPoWUbT2A5jc8L9AMLqGaoH/vPQPI7nSGDznO2bffxJRWcvNx9SLTcCg64qHHIQdQH8Fq1tD3xQVGpmW8uoJMXz4yQgaLEVlepoBNOlziL2xTUcgKDnvlVJYVlfKHKuvWjKsQ9rGgXpGNac4/V1HgeLM7qoe8VASeu7uaSbK7hc4lsAr3Oqa3bOGPSIPtXSUPJbiDvKS2C9wwfmnH9vq0kadZYylU8q4QwfAddsjXAXylmyrvD6cB8uzhjEZmENcnKIkLGLaFTo73hPegGHI1YqQhWB0iPChUjn4mKEQMHyGyG6vJqaH24L0G7Db6MJ/KPzW2w80+skGNr8UwGBSSuvNyy5tLGo6SVRIQi7YB/Z3UV5mYwCDZTj7VacU9ntn/QWiaFDJ0OaSR3eN43QBMqz9c79LHyzZUomKxWEtEry7DsPnkcoxD2NmS//52Rk13k8vZ0aT4erFeayV7BddtzwA0imqZlX43mIKjNCGBRe+HylCcwA/nOZG79O4LyC2V3L7vBGnHoxUM38VoVeoouRgP4Faa3rfEfOO+S5J+NmsdbiLrDj9ki47QFuUQH2QZio9ipCE1HhcZaLoz2jxLT2xxCzzyToZM0SyRFS4gNKeWCP16TxSdE0v3FjeoeUcnbYKGmTN+lCjuNDyrVxTydP8kXHb5hqTVwmEq5wqLS4wfzyJ8WKvXBlWw3HmLXEkH2pVjdNNn7vh9DYOkYdly612KxdkoM3hb4beL70XKQBIKYHhdOP3CL5M/BjeUghELs/qMtbr2ecBIjLX1Gcy3BWZh55L7tXkFVThD0KQz6ifB+Uza0fjYmvaNBxRPEOjKLH7DV5z3hMT+a97AobeMuL6AVd1FgAq8dz8hQP/MyLDfOv7wrejvj8Jd7uNwwj/Hdzq2MBIb0p0Up27Uf7T7oVB6Q6opbOYoCniaA2zILBjgdyhS4tPbnMuZBZAXlzvaqea79Cgheq8PuCJOJt01V0b7IcVgvRLH9YmQ64saCpXzar4+FQvsqvkdF5mOmoNv7UnBv58YWDijkRoRQ+hzJAq6dHrI0vPj8kdn8+8EuMlknWnCXTtoZVOJDzTK7kNxteorYj7iyBi/HAA/LGGp2RDNP4KKxic+3mkhGueywsWRs1sbQ+Lddy3GxlVgnYTjmo4lf46cK01b4VoOUAYdTkr1KZMIghOfweLtLZ35TCnktTtJrpTXD2JCcOtSxt8ZLHGRMGjxXqsVi8KB+QLONJVyiyj/qp4BlyoPgmVy4trHhHL6UCF7i1mz0NupRrohFgnjVzUEz+r86YamWxlZEl4w0dT+dFCFI71RjbgV7Z0B5a4WIfp2zlyzEmPoXrMkab76Sd5bHdBZegpBqCZXpBKZBo04mZS12T5J6SbL2znO9iR6/Mt0NXN9zghCtRAc0UTKGb+NSUetj4LP/3vj/NPpSXwjALbvCh+KTYl1n17LfjTAd0OySyRWD+QuyGormOVOwkfEE1HLPMygW1Oe+16N2RBjBHMyk7SQ8aWMLU5YEOzpJ4DYjjLDlu9wiq/Ex+5+vP/notI4ij3Johz3NsO8C/Q+QmiJYxtOtaBYXvviyfQsezeHRbmGvg/6khDaLXA1UfmPszsggW5FUYvZQ5WmC++jPDpo7MiAxRHWG3An+0tVqqpZiHOk/yMxR1kaWsiqYAeRVbiKnH7GAoXinX4z67G7mLJfvtyRUeSKhxeDHLoe21W79x9+8ue/gmxyWic980Cga9AGLzPMYKxU8VL7w34B92WqDNZ2c7YgFbsoT7zkEcwydlUCiVXEMp3e1J0HBTdj75UT+4uWQlLQ13DJNuSfR6UjD5FvZDbSjKJ4udogdYhsrYnsNNJ2xrfPF/9aqtwP6w5q1/4txoG6gmS73H/6R9yEoPyy1zcWLw6Ma3pJCF0DWTjPr3EhotcAIjq4WLKdr0aebf2W83YXRBlE2REum+vG+L781U6Q261Fu93gzXmah0g1dnmbkHluKPWVNA1IX6RLmZhuqP2Kbz3v7+G15d2TVQV/Ma4WpvAL7CBmKFFI4HIAUwmOLAucZ73r3Gw5zK96993jfR1qrfqz1iL9L6pFapp0vX8d6g6s9VIvHs6E0UO/ju/mGPRdCQasPYP4bmCOnbn+3hBjetzq0uTxB9EEywt713Z4I/3aXy8genNMvkyWxbtKimmks7NDMwRd6hJ2YcBCUKGvSyJNP2KQSSnQUkaMxnGrA8ofOGUeruMkfpvTfEhVfSssVGeHyBrGIx/E7cQz/dvPq+4gaS2POJewgK3zYuoDnda0MfOPv/cCThNGbdIwyc0wB+2P1B8wlp2lykbBsFC9wjkP/8EkM3/OrSGMkZKmOQdsbeIvEUtQDsuS3X5gFmCXDfr1XmxMgAsQFtrIxOGihDK7mhpMxfFmWrvcifiue45YjQZQOzEMd8l+Bk6patZa6Lqn0kJRYM0mCEsc+dTU7gpltNJESZLuc89mM3ann6ETrJSRPQYNsOqXy1Qye/eRkB/zoIXsSi+LriGO4Er16LFEBk5ieI/HUOeLi8xJphtVIWi71weE4RA977IklvRTI4a5XEQbB51xudwDOy1RJmSu0kxxobJPt3VjIcXVXrv2UHZbfocvOI5pr1Fy8p+/fUk70s42bzSCHFr8kfK//0ZFZa3LU2KN/EiW0gwTnyIVh2PcBqbrQESH2SYbTx9xONc/JvIyasJg1VfQfrhH0wZFXjRWM5C8oDytWVvcvUlN7ZoR++f2Kku3vCksGgc29YaB/LcDfMxm1/F4YUdH6bWUh/Tcno7jY4cwpFbJziZmOMfYoiCR22PRgvR0Irj+BDqFNwyTX0u65Zbh783Z1GFBk96i85sYzlX8Yb3iUVldi1aprBC9sYeRwjClRj5Ku1ncXOJZpmsjJs/jp2fsenSmRWu9eWzSwMRKVvSsoO8xB9PrqGfnfx3XTmAI98yBw7InzS70RH1Mww6oM7z3rXCmabvOoby97VXmIFNIELsEN3Y8JVYxAPPrDu/VXkBtonH1CFZI/LM89mvSbpIU0D7sM/tn77lasL3py2Kxh/OeCq87QPYDqFWQ2XUph3CnQafTle82YO24socqFkh141dca8/31jTlTKzaX3ktiaae7W01E0MHJiZAMdkTdz4vJo0rsQKstT0xyOJO3FoEmwnSs0NnrXTAcVJQBEpznz8fipJ8WJBGjcK4GkjymZGmU+zzlJXmiYHQ8yharEiPH8KYdAgjZQ5ZeS6sw7lDec5eEttLRo/q6ZhJieanzjJMAHNXIHLEFJzwzr29y3H4pvtGqBr5kIQX2Xr3fyO+R9R/+D9kw3JAIWCayhXXTMwxC5mTsbvXVS7FzhPnB0D06tWjzswUcKxl+0srWQIvPQ/v1tfTSyJO7cKji/W2aQq1Ro1VefQVCCt4MEEPCJEyMZoqRC18ZREUa7An/XG19OCjyoBl1Csc5iB3uriSXBJ421d5z0BK5C4eMhLA2GIABlS9iuT1WWC3MqinE893LRxwKeGCHJu1zLTo0uXkWV7in8q7Bcl9QN+fvlO9C1GFDR0C3oouewi50egH5vIHepEWJMd60m6D7NKc+KnU4UnP/nhGCj7+TQ26n6Fkh0MP0UaNomXpgOc9HLuX7EWm6Q7pJD368Lgez/1mY1vEPTl0hb88Lot2ZbGztPpUPLM+KXdcPCSqEIOSIYmKu0KMvePlYo/5ypVVDUj6SKGR+iGrcEsTu751w/QD1Rkfe8eCMzgUhd5/ee5hCqlQg0/uqmAIVPGpb2Y1I/AnTialOQAUmcK/uEKDXEnXieKbn+Z9KrzmyjBFIV+KG5see8Az/8GNNygm56ROTy8+rwXf31Hzv6i9iu8pjSC+dnAPQPqSjKGI9CkysbrlNHhgJetcD9+ZClWIaZQ9c6qbnXT2/jPhorjO1OKr1M5FXxVSGTNjZ3tGXE2AgyOLZaZfu14+e+MVML8caFYH/MB4Xh+XW/7Adp3pXk9hV3QWugYGPV60+3fEtW00URIdrnczuSQNIPfdzMvrkFwrTB4k+X3oIG1TuI/YojXZ01zAAvYT7giT+H1H1jvHSb07gpBV7/KNujEsLyRB5E07uEpxiN9WN3TlfzJ093StY+ZUWhCiVFGN7sOcgmOhHXZb/U0tZ0AXXCq8eDoLnClyRk99pESlKRPJ11uioVMBXeC03gxlFHIW6wCEHB+ITfw0hjtC0koqf9otdvdi88CMRtKWqSh+7LvreLv5vnQWLfWweH7OQUlWB+chvsXjtzA6+aWJ7xzPMZpQLQSg6Isdrc50I3uMUOuMyFusWPGCkzpzOZrvSuUpx9WXjbRz+OpfYbkklvGwafhIlIZg4v4u6Nqyy+YE0IpVwnRjqBHJjzuJa/nP7T6JoAmWux0VJXDHfHLj19gEvfIBo9fDNBxRxY+3Vvn49MhPaIC/Kf/ECC7Be9B34UXX7/9jW9b6FOCgBkAazUmsviLZVImdeJ1qgXdoNICnnQiwGyLCv7oWmEamQiVS1tfpwmc16rStE7TfYmMfjtZELtcZMQVxlfaIG11Ja/4Q1K/8WzRgtwKrQl0iML2iq21V6Yf7DBKhCM44ixJCcvC4ZYQEK3EdhuO7v3LuhXauWsAVlozGvsd4/ONYH4awt3Na3ib3BlzBVVMu64Gvn+dHojdiP33Gvms186o/WwfaZPktKGcF3fHGfTTjF5Zjos2YRKBHLJpwbZkYvIQmZzjG6+R+9z6D+Bza8SdD/X76Z/tOkSohlRALbGy20OTMwLExh2TkNT+E+6yghgzmGrjWHMju9unxmZp1HDzblfhPFokaxx+gAr0mp2oPvOPQ8iaU0X4YXL3IWIKyBTcwY1kat7TtgYptOloTbvhr4YwH3HcthXTlBO1goAKnQiRyB2rCdMTyl5k7okBBBPHODMQtNXO9OqRBaDow4+rxxy/CuEGHvaUjh7L8DFvUEQXap1WuPftmarD+R4km42PhiSyzTYKpbE7iTLEFZgXl5TybB/jja6TxeuxBUReNcn++4++nIPy1BqUw28+PVLk//3Fz4nlusGGo6uvdFAi9hr7Pmpk3+v0blA+Q4uymrr5GjqAXW7Ygw/dbIs7OTNdXBirFuk59eZFEbMyhmssbd/HuIMLWSewIbx0CEL2eA9VW4wzWomWQbQJkv8P0QbObtqhqDSCsTUllmle7Km7PQI1m6SetULe6jMGY4kFsJatSGDytSD5FbyxS3qQPFh/sik/7rw8Ex0YpKl0Dgza+6gzWelweS0v8FZA8LTbssfKW9mdwdhh3Es36Hr0wiQWx/bIw8QmN4CcmnPVbY9htApLIyzhyzTELmXc39PL76HUCfrbjyDQftHtE2wjoSMqs4yQLGpr0TTtrg3VFaD0/QnMCV0k27rNkTQpOHas6Cp/20Qqj6DnUqkV7YKmBFhtgGKBbml1yGqVUCoeEOjT7XMhHceh4yt/pt2XGUNql/zD/IlI1ZR/ZZwE2f2+wEx1km7Tr47g7+TlNxH2es2tvHTSzRCgOJ63g08sdVaVFfJABvqpKRdww+Ox1z3BjQRk7K3/oKE5rAIJHXMKny96fNQFP9kmwYQKdrwD+lSo4Qd17Uakas3dW5S4PQfD1LYGHs+yU+UMJi9NJfCW24BJxBIC6Ujy/IQB+9AvK3BzukAXaIeyjQuYRl8dxPFPxY+jVmDB3jePB8+btuldSzuW7fXZ4cvCtNDUCceZXtm356nPwhxzwxvo3MKrJvY7YbiJ+rmRPeFLb7YhKyesy48DyeHt854ESctUi0EGr1uKPWTYS7vtY1UczT0jjFA3Edytve9kSowuytIy5whBcLjVFCQKyXjUJCrwbRyxcOEqp4cjhQ/izRSIj5m+N2m/7eBAB+1NEf2Dvu7rrPpnQ5hWf+D3VCK0/7HvfUlfQh7O1OYpoLpj01FSF6sUBqP5UZa0ij39tYUsqyUR6h4+JkzXL09qyB+HF6oI4AU//+tcREm+1ti5A9XPQs/7OYBcb0+1ALS5gdfRYWe94ek53g5uHt89l0FfibY4GSPo1LIT9zYiT3ZS/+Aw+KnNiN8nb6e940cXLnniI38Kh9pxbX6MOvVrHx3soEGRsM437I0VdgLtIQ4swm534tbafTkoudHtqqE4hJ0IpRGTR8F6LPNeuNiHLT8S+UP18BALueLnLeB35bCTtChqVVUQBJ+U3lqOQTghE2+YzY5pZHOoMwg1feHl4M8W72tVzlpB0rZORJNKDtdhtE9M/gHd97wlARtvsGfgqqGyN4S7FB9jk8gfD80N69PGAJh4ubj1ubWYHIrmusqeZrJrewOr5jWTAfKDIg3P5TUe7qdU3TBhP2QWYVpMRgTm9qKrJDtyn6DYK9xVw0TStGJhXsbLdQDAiYMpQzfzlW3yW0yezJfDXguZ9ar0WO+14TAxZjmiRJoX+GE5IKESy5ChnApPWrwkKQ12V4EWWqOZc5EZqi0GXXGWX6XvvRnpCNme4Pz3Ywrvmdj2G6S8wvQno+HlYOQeBLATou0wMwfdDDjv52gTKqwGCUQOcylCQ1h2Xf0P8yuwI8AvTgi58scEIf3SYNIOt860Ib1tjLZvaweAnGYTewiQxmONkbBr7ema1H8RzxcFrx6pwdjqmy6gbfvXvoD6Vmw7eswFy6bgkEAA="
  },
  {
    title: "Home Elevators",
    description: "Bespoke, compact elevator solutions designed to add luxury and accessibility to your private residence.",
    icon: Home,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/3/XN/NZ/NM/140165441/mini-home-elevator-1000x1000.jpg"
  },
  {
    title: "Elevator Maintenance",
    description: "Proactive, regular servicing to ensure zero downtime and peak performance for your equipment.",
    icon: Wrench,
    image: "https://tse1.mm.bing.net/th/id/OIP.Gq0M95r1mfyG0wQ0Qgcw8AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Installation Services",
    description: "Expert engineering team providing precision installation for all types of elevators.",
    icon: Settings2,
    image: "https://th.bing.com/th/id/OIP.ivcqyTtRaQhmP4Nur3lwFgHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3"
  },
  {
    title: "Modernization",
    description: "Upgrading legacy elevator systems with the latest technology for better safety and lower energy consumption.",
    icon: ArrowUpCircle,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "High Safety Standards",
    description: "Every installation exceeds the most stringent safety certifications and protocols.",
    icon: ShieldCheck,
  },
  {
    title: "Advanced Technology",
    description: "Harnessing the power of modern engineering for silent and energy-efficient lifts.",
    icon: Zap,
  },
  {
    title: "24/7 Support",
    description: "Our response team is available round the clock for emergencies or technical assistance.",
    icon: Clock,
  },
  {
    title: "Skilled Engineers",
    description: "Certified professionals with decades of experience in high-end elevator engineering.",
    icon: Building2,
  },
];

export const TEAM_MEMBERS = [
  { name: "Jagmohan Singh", role: "Director" },
  { name: "Deepak Singh", role: "CEO" },
  { name: "Dhirendra Singh", role: "Accounts" },
  { name: "Vandana Singh", role: "HR" },
  { name: "Aswani Kaushik", role: "Admin" },
];

export const STATS = [
  { label: "Projects Completed", value: 450, suffix: "+" },
  { label: "Happy Clients", value: 380, suffix: "+" },
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Expert Team", value: 50, suffix: "+" },
];

export const WORK_PROCESS = [
  { step: "01", title: "Consultation", description: "In-depth discussion to understand your structural requirements and aesthetic preferences." },
  { step: "02", title: "Planning & Design", description: "Precision engineering blueprints tailored to your building's architecture." },
  { step: "03", title: "Installation", description: "Safe and swift on-site execution by our certified technician team." },
  { step: "04", title: "Testing & Safety Check", description: "Rigorous 50-point inspection before commissioning the unit for use." },
  { step: "05", title: "Maintenance Support", description: "Lifetime partnership ensuring your elevator remains as good as new." },
];
