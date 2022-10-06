ActiveAdmin.register Score do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :time, :level
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :time, :level]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

end
