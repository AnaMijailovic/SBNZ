import React from 'react';
import './AdminProfile.css'
import {ProtectedRoute} from '../common/ProtectedRoute';
import AddDeseaseForm from '../deseases/AddDeseaseForm';
import NewRuleForm from "../new-rule/NewRuleForm";

export default function AdminProfile() {
  /*  
          <ProtectedRoute role="ADMIN" exact path="/admin-profile/risks" component={Risks} />
          <ProtectedRoute role="ADMIN" exact path="/admin-profile/deseases" component={Deseases} />
          <Route exact path="/admin-profile/deseases/:id" component={DeseaseDetails} />
          <Route exact path="/admin-profile/risks/:id" component={RiskDetails} />

  */
    return (
      <div className="admin-profile-root">
          <ProtectedRoute role="ADMIN" exact path="/admin-profile/new-rule" component={NewRuleForm} />
          <ProtectedRoute role="ADMIN" exact path="/admin-profile/new-desease" component={AddDeseaseForm} />

      </div>
    );
  }