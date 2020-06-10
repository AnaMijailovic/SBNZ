import React from 'react';
import './AdminProfile.css'
import Deseases from '../deseases/Deseases';
import Risks from '../risks/Risks';
import {ProtectedRoute} from '../common/ProtectedRoute';
import DeseaseDetails from '../deseases/DeseaseDetails';
import RiskDetails from '../risks/RiskDetails';
import AddDeseaseForm from '../deseases/AddDeseaseForm';
import NewRuleForm from "../new-rule/NewRuleForm";
import { Route } from "react-router-dom";

export default function AdminProfile() {
  
    return (
      <div className="admin-profile-root">
          <ProtectedRoute role="ADMIN" exact path="/admin-profile/new-rule" component={NewRuleForm} />
          <ProtectedRoute role="ADMIN" exact path="/admin-profile/risks" component={Risks} />
          <ProtectedRoute role="ADMIN" exact path="/admin-profile/deseases" component={Deseases} />
          <ProtectedRoute role="ADMIN" exact path="/admin-profile/new-desease" component={AddDeseaseForm} />
          <Route exact path="/admin-profile/deseases/:id" component={DeseaseDetails} />
          <Route exact path="/admin-profile/risks/:id" component={RiskDetails} />
      </div>
    );
  }