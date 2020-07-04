import React from 'react';
import './AdminProfile.css'
import {ProtectedRoute} from '../common/ProtectedRoute';
import AddDiseaseForm from '../diseases/AddDiseaseForm';
import NewRuleForm from "../new-rule/NewRuleForm";

export default function AdminProfile() {
  /*  
          <ProtectedRoute role="ADMIN" exact path="/admin-profile/risks" component={Risks} />
          <ProtectedRoute role="ADMIN" exact path="/admin-profile/diseases" component={Diseases} />
          <Route exact path="/admin-profile/diseases/:id" component={DiseaseDetails} />
          <Route exact path="/admin-profile/risks/:id" component={RiskDetails} />

  */
    return (
      <div className="admin-profile-root">
          <ProtectedRoute role="ADMIN" exact path="/admin-profile/new-rule" component={NewRuleForm} />
          <ProtectedRoute role="ADMIN" exact path="/admin-profile/new-disease" component={AddDiseaseForm} />

      </div>
    );
  }