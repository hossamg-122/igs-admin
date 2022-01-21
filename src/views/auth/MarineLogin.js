import { Link } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

import IGSLogo from '@src/assets/images/logo/igs-logo.png'
import MarineLogo from "@src/assets/images/logo/marine-logo.png"

const MarineLogin = () => {  

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <div className='igs-auth-left-section auth-bg px-2 p-lg-3'>
          <Col className='mx-auto content-section' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='mb-2 text-center'>
              Welcome To
            </CardTitle>
            <div className="logo text-center">
              <img src={IGSLogo} decoding="async" alt="IGS" width="216px" />
            </div>
            <CardText className='sign-note text-center text-white'>
              Please Sign-in to Your Account
            </CardText>
            <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
              <FormGroup>
                <Label className='form-label text-white' for='login-email'>
                  Email
                </Label>
                <Input type='email' id='login-email' placeholder='john@example.com' autoFocus />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label text-white' for='login-password'>
                    Password
                  </Label>
                </div>
                <InputPasswordToggle className='input-group-merge' id='login-password' />
              </FormGroup>
              <FormGroup>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Link to='/' className="text-white">
                    <small>Forgot Password?</small>
                  </Link>
                  <CustomInput type='checkbox' className='custom-control-info' id='remember-me' label='Remember Me' />
                </div>
              </FormGroup>
              <Button.Ripple tag={Link} to='/contractor/dashboard' color='info' block>
                Login
              </Button.Ripple>
            </Form>
            <div className='text-center mt-3'>
              <p className='text-white'>New on our platform?</p>
              <Link to='/' className="text-info">
                <span>Create an account</span>
              </Link>
            </div>
            <div className='auth-footer-btn'>
              <p className="text-white text-center">
                All Rights Reserved
              </p>
              <p className="text-white text-center">
                IGS GmbH - Berlin - Germany - 2022
              </p>
            </div>
          </Col>
        </div>
        <div className='igs-auth-right-section d-none d-lg-block'>
          <div className="auth-nav bg-white text-center">
            <img src={MarineLogo} decoding="async" alt="Marine" width="221px" height="82px" />
          </div>
          <div className='background-section'>
          </div>
        </div>
      </Row>
    </div>
  )
}

export default MarineLogin
